from reportlab.platypus import Paragraph, Spacer, Image
from reportlab.lib.units import inch
from pathlib import Path

LOGO_PATH = Path("backend/assets/logo.png")


def add_logo(elements):
    if LOGO_PATH.exists():
        logo = Image(str(LOGO_PATH))
        logo.drawWidth = 1.2 * inch
        logo.drawHeight = 1.2 * inch
        elements.append(logo)

    elements.append(Spacer(1, 0.2 * inch))


def add_title(elements, styles):
    elements.append(
        Paragraph(
            "<font size='22'><b>DentAI Clinical Report</b></font>",
            styles["Title"]
        )
    )

    elements.append(Spacer(1, 0.2 * inch))