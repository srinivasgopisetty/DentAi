@router.post(
    "/predict",
    response_model=PredictionResponse,
    tags=["Prediction"]
)
async def predict(file: UploadFile = File(...)):

    print("=== /predict endpoint reached ===", flush=True)

    # Validate file extension
    image_path = UPLOAD_DIR / file.filename
    extension = image_path.suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, JPEG and PNG images are allowed."
        )

    # Save uploaded image
    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run AI inference
    detections = predict_image(str(image_path))

    # Generate recommendations
    findings = generate_recommendations(detections)

    pdf_path = generate_pdf(file.filename, findings)

    return PredictionResponse(
        analysis=Analysis(
            filename=file.filename,
            total_findings=len(findings),
            report_name=pdf_path.name
        ),

        findings=[
            Finding(
                class_name=item["class"],
                count=item["count"],
                confidence=item["confidence"],
                location=item["location"],
                description=item["description"],
                recommendations=item["recommendation"]
            )
            for item in findings
        ],

        detections=[
            Detection(
                class_name=item["class"],
                confidence=item["confidence"],
                bbox=item["bbox"]
            )
            for item in detections
        ],

        summary=Summary(
            detected_conditions=sorted(
                list({item["class"] for item in findings})
            )
        ),

        disclaimer=(
            "DentAI is an AI-assisted educational tool. "
            "It is not a substitute for professional dental diagnosis "
            "or clinical judgment."
        )
    )