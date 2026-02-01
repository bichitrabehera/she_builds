export const handlePdfDownload = async (pdfUrl: string, filename: string) => {
  try {
    // Use our proxy API to download the PDF
    const proxyUrl = `/api/pdf?url=${encodeURIComponent(pdfUrl)}`;

    // Create a download link and trigger download
    const link = document.createElement("a");
    link.href = proxyUrl;
    link.download = `${filename}.pdf`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading PDF:", error);
    // Fallback to opening in new tab
    window.open(pdfUrl, "_blank");
  }
};
