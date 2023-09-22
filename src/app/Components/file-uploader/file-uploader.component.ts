import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  template: `
  <div class="container mt-3">
  <h3>File Uploader</h3>
  <div class="flex-box">
    <!-- <div class="selectFileBtn"> -->
      <button>Choose File</button>
    <!-- </div> -->
    <div>
      <button type="button" class="btn btn-success btn-sm" disabled>Upload</button>
    </div>
  </div>

  <!-- Progress Bar -->
  <div class="progress containerAlign" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 100%">100%</div>
  </div>

  <!-- card -->
  <div class="card containerAlign">
    <span class="text">Uploaded the file successfully:</span>
  </div>

  <!-- List of files -->
  <ul class="list-group mb-3">
    <li class="list-group-item active" aria-current="true" style="background-color: #E2E3E5; color: #000; border: 1px solid #E2E3E5;">List of items</li>
    <li class="list-group-item" style="color: blue;">item 1</li>
    <li class="list-group-item" style="color: blue;">item 2</li>
    <li class="list-group-item" style="color: blue;">item 3</li>
  </ul>
</div>
  `,
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
