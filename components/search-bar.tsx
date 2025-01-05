'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function SearchBar() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filters, setFilters] = useState({
    fruits: false,
    vegetables: false,
    seasonal: false,
  });

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search fresh produce..."
            className="pl-10"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="py-6 space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Categories</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fruits"
                      checked={filters.fruits}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, fruits: checked as boolean })
                      }
                    />
                    <Label htmlFor="fruits">Fruits</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="vegetables"
                      checked={filters.vegetables}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, vegetables: checked as boolean })
                      }
                    />
                    <Label htmlFor="vegetables">Vegetables</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="seasonal"
                      checked={filters.seasonal}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, seasonal: checked as boolean })
                      }
                    />
                    <Label htmlFor="seasonal">Seasonal Items</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  step={1}
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}