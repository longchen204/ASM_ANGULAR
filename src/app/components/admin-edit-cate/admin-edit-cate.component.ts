import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-cate',
  templateUrl: './admin-edit-cate.component.html',
  styleUrl: './admin-edit-cate.component.css',
})
export class AdminEditCateComponent {
  constructor(
    private route: ActivatedRoute,
    private CategoryService: CategoryService
  ) {}
  cateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  CategoryId = this.route.snapshot.params['id'];

  async ngOnInit() {
    this.CategoryService.Get_Category_By_Id(this.CategoryId).subscribe(
      (data) => {
        console.log(data);
        this.cateForm.controls.name.setValue(data.name);
      }
    );
  }

  router = new Router();
  onEditSubmit = async () => {
    this.CategoryService.Edit_Category(
      this.CategoryId,
      this.cateForm.value as any
    ).subscribe((data) => {
      alert('Cập nhật thành công');
      this.router.navigate(['admin']);
    });
  };
}
