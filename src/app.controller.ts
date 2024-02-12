// // import { Controller, Get ,Post,UploadedFile,UseInterceptors} from '@nestjs/common';
// // import { AppService } from './app.service';
// // import{FileInterceptor} from '@nestjs/platform-express'
// // import { diskStorage } from 'multer';

// // @Controller()
// // export class AppController {
// //   constructor(private readonly appService: AppService) {}


// // @Post('upload')
// // @UseInterceptors(FileInterceptor(fieldName:'file',localOptions:{
// //   storage:diskStorage({
// //     destination:"./uploads"
// //   })
// // }))
// // uploadFile(@UploadedFile() file: Express.Multer.File) {
// //   console.log(file);
// // }
// // }


// import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
// import { AppService } from './app.service';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file', {
//     storage: diskStorage({
//       destination: './uploads',
//       filename:(req,file,cb)=>{
//         cb(null,'${file.orginalname}')
//       }
//     }),
//   }))
//   async uploadFile() {
   
//     return "success";
//   }


// }



import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`); 
      }
    }),
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return "success";
  }
}


