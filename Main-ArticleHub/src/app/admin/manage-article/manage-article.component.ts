import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackBarService } from '../../services/snack-bar.service';
import { ThemesService } from '../../services/themes.service';
import { ArticleService } from '../../services/article.service';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstant } from '../../shared/gobal_constant';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';

@Component({
  selector: 'app-manage-article',
  standalone: false,
  templateUrl: './manage-article.component.html',
  styleUrl: './manage-article.component.scss'
})
export class ManageArticleComponent implements OnInit {
  displayedColumns: string[] = ['title', 'categoryName', 'status', 'publication_status', 'edit'];
  dataSource: any;
  responseMessage: any;
  constructor(private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackBarService: SnackBarService,
    public themeService: ThemesService,
    private articleService: ArticleService
  ) { }
  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();

  }
  tableData() {
    this.articleService.getAllArticle().subscribe((resp: any) => {
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(resp);


    }, (error: any) => {
      this.ngxService.stop();
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage = GlobalConstant.genericError;

        this.snackBarService.openSnackBar(this.responseMessage)
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  handleAddAction(value: any) {

  }
  handleViewAction(value: any) {

  }
  handleEditAction(value: any) {

  }

  onDelete(value: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete' + value.title + 'article'

    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const res = dialogRef.componentInstance.onEmitStatusChanege.subscribe((resp: any) => {
      this.ngxService.start();
      this.deleteProduct(value.id);
      dialogRef.close();

    })
  }
  deleteProduct(id: any) {
    this.articleService.deleteArticleData(id).subscribe((resp: any) => {
      this.ngxService.stop();
      this.tableData();
      this.responseMessage = this.responseMessage;
      this.snackBarService.openSnackBar(this.responseMessage);
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage = GlobalConstant.genericError;

        this.snackBarService.openSnackBar(this.responseMessage)
      }

    })

  }

}
