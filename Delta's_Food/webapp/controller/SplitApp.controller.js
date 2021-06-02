sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/base/Log",
    "sap/ui/core/mvc/XMLView"
	
], function (MessageToast, Controller, Device, Log, XMLView) {
	"use strict";
	

	return Controller.extend("sap.ui.demo.walkthrough.SplitApp", {

		onInit: function () {
			Device.orientation.attachHandler(this.onOrientationChange, this);
		},

		onExit: function () {
			Device.orientation.detachHandler(this.onOrientationChange, this);
		},

		onOrientationChange: function (mParams) {
			var sMsg = "Orientation now is: " + (mParams.landscape ? "Landscape" : "Portrait");
			MessageToast.show(sMsg, { duration: 5000 });
		},

		onPressApply: function () {
			this.getSplitAppObj().to(this.createId("vendorApply"));
		},

		onPressDetailBack: function () {
			this.getSplitAppObj().backDetail();
		},

		onPressMasterBack: function () {
			this.getSplitAppObj().backMaster();
		},

		onPressGoToMaster: function () {
			this.getSplitAppObj().toMaster(this.createId("master2"));
		},

		onListItemPress: function (oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

			this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},

		onPressModeBtn: function (oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitAppObj().setMode(sSplitAppMode);
			MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
		},
        onPressSubmit: function () {
			
			var comName = this.getView().byId("CompanyName").getValue();
			var comEmail = this.getView().byId("CompanyEmail").getValue();
			var comProduct = this.getView().byId("ProductType").getValue();
			var comNumber = this.getView().byId("CompanyNumber").getValue();
			var comTel = this.getView().byId("TelNumber").getValue();
			var NewPwd = this.getView().byId("NewPwd").getValue();
			var ConPwd = this.getView().byId("ConPwd").getValue();

			if(comName=="" || comEmail=="" || comProduct=="" || comNumber=="" || comTel=="" || NewPwd=="" || ConPwd=="")
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("All input fields are mandatory",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Failed",
					actions : [sap.m.MessageBox.Action.OK]
				});
			}else{
				
				var company = {
					name: comName,
					email: comEmail,
					product: comProduct,
					number: comNumber,
					tell: comTel,
					password: NewPwd	
				}
				Display('do you console');
				//SaveData(company);
				Email.send({
					Host : "smtp.mailtrap.io",
					Username : "2c71efb4e01421",
					Password : "c72b87c57ffbd1",
					To : comEmail,
					From : "c.m.mkhwanazi@gmail.com",
					Subject : "Applicattion Notificarion",
					Body : "<html><h2>We have received your Application</h2><strong>Your application is under review, You will from us soon.</strong><br></br><em>Team Delta's Food</em></html>"
				});
				

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Check your email for verification",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Verification",
					actions : [sap.m.MessageBox.Action.OK]
				});
				

			}
		},
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
					this.getSplitAppObj().to(this.createId("VendorLogin"));
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
		SaveData: function(ClientData){

			var fs = require('fs');
			// const done = error =>{
			// 	if(error){
			// 		console.error(error);
			// 		return;
			// 	}
			// }

			// var jsonData = JSON.stringify(ClientData, null, 2)
			// fs.writeFile('clientData.json', jsonData, done)
			fs.writeFile ("clientData.json", JSON.stringify(ClientData, null, 2), function(err) {
				if (err) throw err;
				console.log('complete');
				})

		},

		Display: function (msg) {
			var msg = " Console"
			console.log(msg);
			return(msg);
		},


		getSplitAppObj: function () {
			var result = this.byId("idSplitApp");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		}

	});
	
});