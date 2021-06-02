sap.ui.define([
	"sap/ui/core/mvc/Controller"
	
], function (Controller) {
	"use strict";
	

	return Controller.extend("sap.ui.demo.walkthrough.Master", {
			
		gotoVendorApply: function(){
			var oApp = this.getView().getParent().getParent();
			oApp.toDetail("idApp--idSplitApp--idVendorApp")
		},
		gotoVendorStatus: function(){
			var oApp = this.getView().getParent().getParent();
			oApp.toDetail("idApp--idSplitApp--idVendorStatus")
		}
	});
	
});