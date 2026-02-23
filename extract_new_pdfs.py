import fitz  # PyMuPDF
import os

pdfs = [
    {
        "path": "/Users/mrrayan07/Desktop/Designbox/Sunita Karatagi Presentation.pdf",
        "slug": "sunita-karatagi"
    },
    {
        "path": "/Users/mrrayan07/Desktop/Designbox/Proposed Growdhan office 3d.pdf",
        "slug": "growdhan-office"
    }
]

output_dir = "/Users/mrrayan07/Desktop/Designbox/public/projects"

for item in pdfs:
    slug = item["slug"]
    slug_dir = os.path.join(output_dir, slug)
    os.makedirs(slug_dir, exist_ok=True)
    
    doc = fitz.open(item["path"])
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        # Use high resolution
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        
        # Save as high quality jpeg
        img_path = os.path.join(slug_dir, f"page_{page_num + 1}.jpeg")
        pix.save(img_path)
    
    print(f"Extracted {len(doc)} pages for {item['path']}")
