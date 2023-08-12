import { Component, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "hello",
  template: `
    <div class="container">
        <div class="card">
            <div class="card-header">Add User</div>
            <div class="card-body">
                <div class="container">
                    <form>
                        <div class="form-group">
                            <label for="inputEmail">Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="form-group">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group">
                            <label for="inputState">State</label>
                            <input type="text" class="form-control" id="inputState">
                        </div>
                        <div class="form-group">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>
                        <button type="submit" class="btn btn-primary">Save User</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  `
})
export class AddUserComponent {
    constructor(
        private _mdr: MatDialogRef<AddUserComponent>,
        @Inject(MAT_DIALOG_DATA) data: string
      ) {
        
      }
  CloseDialog() {
    this._mdr.close(false)
  }
}
