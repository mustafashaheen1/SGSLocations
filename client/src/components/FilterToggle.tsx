import { useState } from 'react';

interface FilterToggleProps {
  label: string;
  count?: number;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function FilterToggle({ 
  label, 
  count, 
  defaultChecked = false,
  onChange 
}: FilterToggleProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-4 transition-colors"
      style={{ height: '44px' }}
      onClick={handleToggle}
      data-testid={`filter-toggle-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Toggle Switch */}
      <div
        className="relative flex-shrink-0 rounded-full transition-colors duration-200"
        style={{
          width: '44px',
          height: '24px',
          backgroundColor: isChecked ? '#dc2626' : '#e5e7eb'
        }}
      >
        <div
          className="absolute top-1 bg-white rounded-full shadow-sm transition-transform duration-200"
          style={{
            width: '16px',
            height: '16px',
            transform: isChecked ? 'translateX(22px)' : 'translateX(4px)'
          }}
        />
      </div>

      {/* Label */}
      <span className="flex-1 ml-3 text-sm text-gray-900">
        {label}
      </span>

      {/* Count */}
      {count !== undefined && (
        <span className="text-sm text-gray-500 ml-2">
          {count.toLocaleString()}
        </span>
      )}
    </div>
  );
}
