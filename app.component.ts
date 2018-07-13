import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { EthcontractService } from './services/ethcontract.service';
import { IpfsService } from './services/ipfs.service';
import { IPFSResponse } from './api-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  fileToUpload : File;
  hash : any ;
  
  constructor(
    private ethContractService: EthcontractService,
    private router: Router,
    private ipfsService: IpfsService
    ) { }

    ngOnInit() {
      this.router.navigateByUrl('/');
    }

    ngOnDestroy() {
    }


  /* public onFileSelected(event) {
    console.log('File Selected');
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);    
  }

  public upload() {
     this.ipfsService.uploadFileToIPFS(this.fileToUpload)
     .then(result => this.hash = result); 
  }
 */
  /* sayHelloWorld = () =>{
    let that = this;
    that.ethContractService.printHelloWorld().then(function(response){
      that.hello = response.output;

    }).catch(function(error){
      console.log(error);
    });
  }; */

  
  
}
