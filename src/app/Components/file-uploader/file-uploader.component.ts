import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  template: `
  <div class="container">
  <h3>File Uploader</h3>
  <div class="flex-box">
    <!-- <div class="selectFileBtn"> -->
      <button>Choose File</button>
    <!-- </div> -->
    <div>
      <button type="button" class="btn btn-success btn-sm" disabled>Success</button>
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
  <div class="list-group containerAlign">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      List of Files
    </a>
    <a href="#" class="list-group-item list-group-item-action">A second link item</a>
    <a href="#" class="list-group-item list-group-item-action">A third link item</a>
    <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
    <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
  </div>
</div>
  `,
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
