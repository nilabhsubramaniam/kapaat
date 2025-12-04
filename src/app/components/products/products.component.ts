import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { ApiService } from '../../services/api.service';

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  product_type: string;
  region_id: number;
  vendor_id: number | null;
  state_origin: string;
  saree_type: string;
  base_price: number;
  discount_percentage: number;
  final_price: number;
  fabric: string;
  weave_type: string;
  occasion: string;
  stock_quantity: number;
  is_active: boolean;
  metadata: {
    color: string;
    care: string;
    length?: string;
    pattern?: string;
    washable?: boolean;
    blouse?: string;
    size?: string;
    neckline?: string;
    sleeves?: string;
  };
  created_at: string;
  updated_at: string;
  region?: {
    id: number;
    name: string;
    slug: string;
    type: string;
    state_id: number;
    famous_for: string;
  };
  images?: Array<{
    id: number;
    product_id: number;
    image_url: string;
    alt_text: string;
    display_order: number;
    is_primary: boolean;
  }>;
}

interface ProductsResponse {
  data: Product[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'product_type', 'state_origin', 'saree_type', 'base_price', 'discount_percentage', 'fabric', 'weave_type', 'stock_quantity', 'region', 'actions'];
  dataSource = new MatTableDataSource<Product>([]);
  loading = true;
  error: string | null = null;
  totalItems = 0;
  pageSize = 20;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    // Don't use paginator for client-side pagination since we're using server-side
    this.dataSource.sort = this.sort;
  }

  loadProducts(): void {
    this.loading = true;
    this.error = null;
    
    this.apiService.get<ProductsResponse>('admin/products').subscribe({
      next: (response) => {
        this.dataSource.data = response.data;
        this.totalItems = response.pagination.total;
        this.pageSize = response.pagination.per_page;
        this.currentPage = response.pagination.page - 1;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.error = 'Failed to load products. Please try again.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editProduct(product: Product): void {
    console.log('Edit product:', product);
    alert(`Edit product: ${product.name}`);
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.apiService.delete(`admin/products/${id}`).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(p => p.id !== id);
        },
        error: (err) => {
          console.error('Error deleting product:', err);
          alert('Failed to delete product. Please try again.');
        }
      });
    }
  }

  getStockClass(quantity: number): string {
    if (quantity <= 10) {
      return 'stock-danger';
    } else if (quantity >= 50) {
      return 'stock-surplus';
    }
    return 'stock-normal';
  }
}
