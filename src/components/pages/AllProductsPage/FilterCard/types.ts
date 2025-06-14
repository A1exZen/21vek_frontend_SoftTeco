export interface Filter {
  brand?: string;
  price_filtr?: 'asc' | 'desc';
  popular?: boolean;
  min_price?: number;
  max_price?: number;
}

export interface FilterCardProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filter: Filter) => void;
  currentFilter: Filter;
}