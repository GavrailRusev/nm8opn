import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxExcelExporterService,
	IgxButtonModule
 } from "igniteui-angular";
 import { ExcelUtility } from './excel-utility';
import { IgxExcelModule } from "igniteui-angular-excel";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet";
import { ExcelExportSample1Component } from "./services/excel-export-sample-1/excel-export-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ExcelExportSample1Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxGridModule,
	IgxButtonModule,
	IgxSpreadsheetModule,
	IgxExcelModule
], 
  providers: [IgxExcelExporterService,ExcelUtility],
  schemas: []
})
export class AppModule {}
