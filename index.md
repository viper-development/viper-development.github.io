---
layout: page
title: "Home"
order: 1
---

<div ng-app="viperdev">
  <div ng-controller="Data as dc">
    <section id="test1">
      <div class="container">
        <div>
          <div class="dive-title">Get Better Development Results in Less Time</div>
          <div class="small-heading">
              We know how developers work together. We have worked with teams on site and founded big open source projects.
              Stop wasting time on researching on tooling and workflows to possibly end up with a bad choice.
          </div>
          <br>

          <hr class="mid-sepr">
          <div class="small-heading">
            <q>viperdev helped us save at least 2 million euro revenue per year.</q>
            <div><em>Jozef Képesi, CTO at Skypicker</em></div>
          </div>
          <hr class="mid-sepr">

          <br>
          <div class="images row">
            <div class="col-md-12">
              <div class="container">
                <div class="row showcase-gi">
                  <div ng-repeat="plan in dc.plans" class="card card-main showcase-card-gi-quote">
                    <div class="empty-quote">
                      <div class="name-quote">{{plan.title}}</div>
                      <div class="small-name-quote">{{ plan.subtitle }}</div>
                    </div>
                    <div class="card-action quote-data plans">
                      <ul type="square">
                        <li ng-repeat="feature in plan.features">{{ feature }}</li>
                      </ul>
                    </div>
                    <div class="small-fields-group">
                      <div class="card-action small-fields-2">
                        <div class="row sfr">
                          <div ng-bind-html="plan.price" class="duration col-md-12"></div>
                        </div>
                      </div>
                      <div class="card-action  small-fields">
                        <div class="row sfr">
                          <div ng-bind-html="plan.form" class="price-range col-md-12"></div>
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
          <div class="disclaimer-pricing">
            All prices are exclusive VAT. Recurring plans have a minimum commitment of 3 months: we will need this time together to get you a long term return of investment. Don't worry: from then you can cancel every month.
          </div>
        </div>
      </div>
  </div>
  <br>
  <section>
  </section>
  </section>
</div>
</div>
