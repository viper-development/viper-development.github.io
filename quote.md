---
layout: page
title: "Request A Quote"
order: 3
---

<div ng-app="viperdev">
<div ng-controller="Data as dc">
<section id="test1">
  <div class="container">
   <div >
    <div class="dive-title">Request a Quote</div>
    <div class="viper-subtitle">HERE'S WHAT WE DO BEST</div>
    <br><br>
    <div class="images row">
      <div class="col-md-12">
        <div class="container">
          <div class="row showcase-gi">
            <div  ng-repeat="plan in dc.plans" class="card card-main showcase-card-gi-quote">
             <div class="empty-quote">
             <div class="name-quote">{{plan.title}}</div>
               <div class="small-name-quote">{{ plan.subtitle }}</div>
             </div>
             <div class="card-action quote-data plans" >
              <ul type="square">
                <li ng-repeat="feature in plan.features">{{ feature }}</li>
              </ul>
            </div>
            <div class="small-fields-group">
           
          <div class="card-action small-fields-2">
            <div class="row sfr">
              <div class="duration col-md-12">{{plan.duration}}</div>
            </div>
          </div>
          <div class="card-action  small-fields">
           <div class="row sfr">
            <div class="price-range col-md-12">{{plan.price}}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div class="container">
<div class="disclaimer-pricing">All prices are exclusive VAT. If the engagement happens on your premises, you will be responsible for covering travel and accommodation cost.</div>
</div>
<div class="dive-title">Looking for a personalised plan ?</div>
<center><div class="dive-small-title">Just drop us a mail at <a href="mailto:contact@viperdev.io">contact@viperdev.io</a></div></center>
<br><br>
<hr class="mid-sepr">
<div class="" href="#one!">
  <div class="quotation">
   Viper Development found a solution that I would have never thought about way above expectations and below budget.
 </div>

 <div class="author-quote">Hannes W. Lampe, Researcher</div>
</div>
<hr class="mid-sepr">
</div>
</div>
<br>
<section>
</section>
</section>
</div>
</div>

<style type="text/css">
.sfr{
  margin-bottom: 0px !important;
}
  .small-fields-group{
      margin-bottom: 0px !important;
    text-align: center;
    width: 100%;
    bottom: 0 !important;
    position: absolute;
  }

  .small-fields-group > div{
    padding:1em !important;
  }

  .disclaimer-pricing{
    text-align: center;
  }
</style>
