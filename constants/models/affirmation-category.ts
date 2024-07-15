interface AffirmationCategory {
  title: string;
  data: GalleryPreviewData[];
}

interface GalleryPreviewData {
  id: number;
  text: string;
  image: any;
}

export { AffirmationCategory, GalleryPreviewData };
