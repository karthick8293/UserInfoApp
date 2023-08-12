import { Component, OnInit  } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { AddUserComponent } from "./addUser.component";
import { APIServiceService } from './_service/apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  matDialogRef: MatDialogRef<AddUserComponent>;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private APIServiceService: APIServiceService,private matDialog: MatDialog) {}
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.APIServiceService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  onEditUser(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  onDeleteUser(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  AddUserModal() {
    this.matDialogRef = this.matDialog.open(AddUserComponent, {
      data: {  },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
      }
    });
  }
}
