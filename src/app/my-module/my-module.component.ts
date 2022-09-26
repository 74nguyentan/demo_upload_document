import { Component, OnInit } from '@angular/core';
import { DemoService } from '../shared/demo.service';

@Component({
  selector: 'app-my-module',
  templateUrl: './my-module.component.html',
  styleUrls: ['./my-module.component.css'],
})
export class MyModuleComponent {
  arrFile: any = [];

  constructor(private dinhKemService: DemoService) {}

  onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target !== null && target.files !== null) {
      // chuyển file qua form đăng tin, chờ thêm xong product thì lấy productId rồi thêm
      Array.from(target.files).forEach((item) => {
        this.arrFile.push(item);
      });
      // this.files.next(this.arrFile);
    }
  }

  async dinhKemPhapLy(id?: string) {
    
    if (this.arrFile.length) {
      try {
        for (let index = 0; index < this.arrFile.length; index++) {
          await this.dinhKemService
            .taiTep(this.arrFile[index], this.arrFile[index].name, id)
            .toPromise();
        }
      } catch (error) {
      } finally {
      }
    }
  }
}
