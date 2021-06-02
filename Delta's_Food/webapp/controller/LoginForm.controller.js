sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log"
], function (Controller,Log ) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.LoginForm",{
        onPressLogin:function(){
			var uname = this.getView().byId("idICname").getValue();
			var pwd = this.getView().byId("idIPwd").getValue();
			if ( uname=="" || pwd=="" )
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Both input fields are mandatory",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Failed",
					actions : [sap.m.MessageBox.Action.OK]
				});
			}
			else
			{ if (uname=="test" && pwd=="test")
				{
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show("Login successful",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Success",
					actions : [sap.m.MessageBox.Action.OK]
					});
					var oApp = sap.ui.getCore().byId("idApp");
					oApp.to("idApp--idSplitApp");
					// this.getSplitAppObj().to(this.createId("idSplitApp"));
					console.log('Load SplitApp')

				}else if (uname=="admin" && pwd=="admin"){
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show("Login successful",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Success",
					actions : [sap.m.MessageBox.Action.OK]
					});
					this.getSplitAppObj().to(this.createId("adminDisplay"));
				}
			}
		},
		getSplitAppObj: function () {
			var result = this.byId("idApp");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		}
    });
});