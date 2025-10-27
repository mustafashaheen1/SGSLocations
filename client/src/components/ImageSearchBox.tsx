import { useState, useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageSearchBoxProps {
  onImageSelect?: (file: File) => void;
}

export default function ImageSearchBox({ onImageSelect }: ImageSearchBoxProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        handleFile(file);
      }
    }
  }, []);

  const handleFile = (file: File) => {
    setSelectedImage(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageSelect?.(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const clearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="mb-8">
      <div
        className={`relative border-2 border-dashed rounded-xl transition-all ${
          dragActive
            ? 'border-primary bg-primary/5'
            : 'border-border bg-card'
        } ${selectedImage ? 'p-4' : 'p-12'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        data-testid="image-search-dropzone"
      >
        {!selectedImage ? (
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Search a Location Using An Image As Reference
            </h3>
            <p className="text-muted-foreground mb-6">
              Drag & Drop an image here or click here to select a file
            </p>
            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFileInput}
              data-testid="input-image-upload"
            />
            <label htmlFor="image-upload">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                onClick={() => document.getElementById('image-upload')?.click()}
                data-testid="button-browse-image"
              >
                Browse Files
              </Button>
            </label>
          </div>
        ) : (
          <div className="flex items-start gap-4">
            <img
              src={previewUrl!}
              alt="Selected for search"
              className="w-32 h-32 object-cover rounded-lg"
              data-testid="img-preview"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium">{selectedImage.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedImage.size / 1024).toFixed(2)} KB
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearImage}
                  data-testid="button-clear-image"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="default"
                className="mt-2"
                onClick={() => console.log('Search by image:', selectedImage.name)}
                data-testid="button-search-by-image"
              >
                Search Similar Locations
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
