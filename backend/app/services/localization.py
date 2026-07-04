def estimate_region(x_center: float, y_center: float) -> str:
    """
    Estimate anatomical region from normalized YOLO coordinates.
    """

    # Horizontal position
    if x_center < 0.33:
        horizontal = "Left"
    elif x_center < 0.66:
        horizontal = "Center"
    else:
        horizontal = "Right"

    # Vertical position
    if y_center < 0.5:
        vertical = "Upper"
    else:
        vertical = "Lower"

    if horizontal == "Center":
        return f"{vertical} Anterior Region"

    return f"{vertical} {horizontal} Region"