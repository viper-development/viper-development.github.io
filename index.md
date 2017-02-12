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

          <div>
            <ul>
              <li>
                We grew <a href="https://coala.io/">coala</a> from below 10 to more than 300 contributors in just one year.
              </li>
              <li>
                We have worked with teams on and off site to improve their workflow and code quality by applying open source principles.
              </li>
              <li>
                We develop bots and review tools to speed up, bet better and save revenue. viperdev shares it's founder and is working together closely with <a href="https://gitmate.io/">GitMate</a>.
              </li>
            </ul>
          </p>

          <br>

          <hr class="mid-sepr">
          <div class="small-heading">
            <q>viperdev helped us save at least 2 million euro revenue per year.</q>
            <div><em>Jozef Képesi, CTO at Kiwi.com</em></div>
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
                    <div class="card-action bullets">
                      How do I benefit?
                      <ul type="square">
                        <li ng-repeat="benefit in plan.benefits">{{ benefit }}</li>
                      </ul>
                    </div>
                    <div class="card-action quote-data bullets">
                      What do I get?
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
            All prices are exclusive VAT.
          </div>
          <div class="disclaimer-pricing">
            Recurring plans have a minimum commitment of 3 months:
            we work with humans and humans always need time to adapt.
            We want you to get the most out of an engagement.
            Don't worry: from then you can cancel every month.
          </div>
        </div>
      </div>
  </div>
  </section>
</div>
</div>
