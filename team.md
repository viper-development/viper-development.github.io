---
layout: page
title: "Meet the Team"
order: 4
---
<div ng-app="viperdev">
<div ng-controller="Data as dc">
<section id="test1">
  <div class="container">
   <div >
    <div class="dive-title">Meet the Team</div>
    <div class="viper-subtitle">OUR CONTRACTORS WHO ARE WORKING TOWARDS YOUR NEEDS</div>
    <br><br>
    <div class="images row">
      <div class="col-md-12">
        <div class="container">
          <div class="row showcase-gi">

          <div ng-repeat="mem in dc.profile"  class="card card-main showcase-card-gi">
             <div class="empty">
             </div>
             <div class="card-action profile-data" >
              <center>
                <img class="profile-img" ng-src={{mem.picture}} height="110" >
                </center>
                <br>
                <div class="person-name">{{mem.name}}</div>
                <div class="person-github-id">{{mem.id}}</div>
                <div class="person-github-bio" ng-bind-html="mem.bio">
                 
                </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <hr>
 <div class="" href="#one!">
      <div class="quotation">
      The team's response time was mind blowing - I could get any question answered within minutes!
</div>
<div class="author-quote">Viktoria Boss, Researcher</div>
    </div>
    <hr>
</div>

<br><br>
<section>
</section>
</section>
</div>
</div>

<style type="text/css">
  .showcase-gi{
    margin-left: 0em !important;
    margin-right: 0em !important;
  }

  .person-github-bio > a{
    text-transform: none !important;
    margin-right: 0em !important;
  }
</style>
