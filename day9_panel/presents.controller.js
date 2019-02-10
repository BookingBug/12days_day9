
import template from './presents.html';

import Configurator from 'bookingbug-configurator-js';

// add a new menu item for the presents
Configurator.addMenuItem( {
    group: 'business',
    key: 'presents',
    roles: ['owner', 'admin', 'personal', 'user', 'parent'],
    label: 'Presents',
    sref: 'app.page.views',
    params: {
        view: 'present'
    }
});


// add new page to the custom pages
Configurator.addPage('CustomPages', 'present', { 
    style: 'tab',
    layout: [
        [
          {
            type: 'bb-present-panel',
            width: 12,
            index: 0,
            panel_params: {
            }
          }
        ]
    ]
});


class PresentController {
  constructor($scope, bbAuthorisation, $stateParams) {
      this.$scope = $scope;
      this.company = bbAuthorisation.getCompany();

      this.getApp();

      this.onCancel = this.onCancel.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
      
  }

  // get the day9 app and the load the objects properties
  async  getApp () {
    // get the app
    const app = await this.company.$get('apps', {app_name: 'day9' })
    this.app = app;

    // load the existing presents
    this.load_objects();

    // load the schema form for seeing what a 'new' present looks like
    const new_obj = await this.app.$get('new_present');
    this.schema = new_obj.schema;
    this.form = new_obj.form;
  }

  // load all obejcts - currently we're not using pagination or anything fancy
  load_objects() {
    // flush the current presents from the local browser cache
    this.app.$flush('presents');
    // re-get the presents
    this.app.$get('presents').then( (res) => {
      res.$get('custom_objects').then( (objs) => {
        this.objects = objs;
      });
    });
  }

  // create a new present - you could add any defaults here
  createNew() {
    this.object = {};
  }

  onCancel() {
    this.object = null;
  }

  onSuccess(res) {
    this.object = null;
    this.load_objects();
  }

  // edit an existing present
  edit(obj){
    this.object = obj;
  }

  // delete a present
  async delete(obj) {
    await obj.$del('self');
    // reload the objects
    this.load_objects();
  }


}


const presentPanel = {
    templateUrl: template.id,
    controller: PresentController,
    scope: true,
    bindings: {
        filter: '<'
    }
};

angular
    .module('BBAdminDashboard')
    .component('bbPresentPanel', presentPanel);

