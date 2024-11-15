import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { GenderWiseGraphService } from 'src/app/admin/adminServices/gender-wise-graph.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-gender-wise-graph',
  standalone: true,
  imports: [NgxChartsModule, CommonModule, MatCardModule,MatButtonToggleModule,],
  templateUrl: './gender-wise-graph.component.html',
  styleUrls: ['./gender-wise-graph.component.css']
})
export class GenderWiseGraphComponent implements OnInit {
color:string = "red";
legendPosition = LegendPosition.Below
  activeLink: string;


  constructor(private genderWiseGraphService: GenderWiseGraphService, private chartRouter: Router
    
  ) {this.activeLink = this.chartRouter.url.replace('/', '');

  
   }

  ngOnInit() {
    this.genderWiseGraphService.getBookingData().subscribe();
  }
  onToggleChange(event: any) {
    this.chartRouter.navigate([event.value]);
    this.activeLink = event.value; // Update active link
    console.log(event.value);
    console.log(this.activeLink);
  }
  

  menWomenRatio = computed(() => {
    const data = this.genderWiseGraphService.GenderWiseGraphData();
    if (!data) return [];
    return [
      { name: 'Men', value: data.totalMen },
      { name: 'Women', value: data.totalWomen }
    ];
  });

  womenTotalRatio = computed(() => {
    const data = this.genderWiseGraphService.GenderWiseGraphData();
    if (!data) return [];
    const total = data.totalMen + data.totalWomen;
    return [
      { name: 'Women', value: data.totalWomen },
      { name: 'Total', value: total }
    ];
  });

  combinedRatio = computed(() => {
    const data = this.genderWiseGraphService.GenderWiseGraphData();
    if (!data) return [];
    const total = data.totalMen + data.totalWomen;
    return [
      { name: 'Men', value: data.totalMen },
      { name: 'Women', value: data.totalWomen },
      { name: 'Total', value: total }
    ];
  });

  charts = [
    {
      title: 'Men vs Women Ratio',
      data: this.menWomenRatio(),
      details: [
        { name: 'Men', value: this.menWomenRatio()[0]?.value },
        { name: 'Women', value: this.menWomenRatio()[1]?.value }
      ]
    },
    {
      title: 'Women vs Total Ratio',
      data: this.womenTotalRatio(),
      details: [
        { name: 'Women', value: this.womenTotalRatio()[0]?.value },
        { name: 'Total', value: this.womenTotalRatio()[1]?.value }
      ]
    },
    {
      title: 'Combined Ratio',
      data: this.combinedRatio(),
      details: [
        { name: 'Men', value: this.combinedRatio()[0]?.value },
        { name: 'Women', value: this.combinedRatio()[1]?.value },
        { name: 'Total', value: this.combinedRatio()[2]?.value }
      ]
    }
  ];
}
