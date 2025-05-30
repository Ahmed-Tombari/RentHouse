"use client"

// Sample image data — replace this with your own array
const galleryImages = [
  {
    id: 1,
    src: 'images/H1.avif', 
    alt: 'Gallery image 1',
  },
  {
    id: 2,
    src: 'images/H2.jpg', 
    alt: 'Gallery image 2',
  },
  {
    id: 3,
    src: 'images/H3.avif', 
    alt: 'Gallery image 3',
  },
  {
    id: 4,
    src: 'images/H4.jpg', 
    alt: 'Gallery image 4',
  },
  {
    id: 5,
    src: 'images/H10.avif', 
    alt: 'Gallery image 5',
  },
  {
    id: 6,
    src: 'images/H11.jpg', 
    alt: 'Gallery image 6',
  },
  {
    id: 7,
    src: '/images/H6.avif', 
    alt: 'Gallery image 7',
  },
  {
    id: 8,
    src: 'images/H7.jpg', 
    alt: 'Gallery image 8',
  },
  {
    id: 9,
    src: 'images/H8.avif', 
    alt: 'Gallery image 9',
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {galleryImages.map((image) => (
        <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition hover:shadow-xl">
          <img
            src={image.src}
            alt={image.alt}
            className="h-auto w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
            }}
          />
        </div>
      ))}
    </div>
  );
}