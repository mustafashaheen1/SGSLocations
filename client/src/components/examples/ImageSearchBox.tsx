import ImageSearchBox from '../ImageSearchBox';

export default function ImageSearchBoxExample() {
  return (
    <div className="p-6">
      <ImageSearchBox onImageSelect={(file) => console.log('Image selected:', file.name)} />
    </div>
  );
}
