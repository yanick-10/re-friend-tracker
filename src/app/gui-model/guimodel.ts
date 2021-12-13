export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Simone Cundo, Yanick Hoppler, Milan Schlatter MSY Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        { 
                            "id":   "group", 
                            "type": "autocomplete", 
                            "name": "Group", 
                            "url": "/group", 
                            "form": "GroupForm", 
                            "width": 2 
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "commentlocation",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {                            
                            "id":   "name",
                            "type": "text",
                            "name": "Activity",
                            "required": true,
                            "url": "/activity",
                            "width": 2
                        },
                        {
                            "id": "activitydate",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "commentactivity",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "id": "activitydate",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
                        {
                            "id": "commentactivity",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                { 
                    "id": "GroupForm", 
                    "title": "Group", 
                    "url": "/group", 
                    "formFieldList": [ 
                        { 
                            "id": "name", 
                            "type": "text", 
                            "name": "GroupName", 
                            "width": 2, 
                            "required": true 
                        }, 
                        {
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
                        {
                            "id": "commentgroup",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        { 
                            "type": "deleteButton", 
                            "name": "Delete" 
                        }, 
                        { 
                            "type": "cancelButton", 
                            "name": "Cancel" 
                        }, 
                        { 
                            "type": "okButton", 
                            "name": "Ok" 
                        } 
                    ] 
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-running",
                            "color": "red",
                            "page": "activitypage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendactivitypage",
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "locationactivitylistpage"
                        },
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-weixin",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        { 
                            "type": "list", 
                            "icon": "fa-weixin", 
                            "color": "wisteria", 
                            "search": true, 
                            "url": "/group", 
                            "form": { 
                            "form": "GroupForm" 
                            } 
                        }, 
                    ]
                },
                {
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-running",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        { 
                            "type": "list", 
                            "icon": "fa-running", 
                            "color": "red", 
                            "search": true, 
                            "url": "/activity",
                            "page": "activityfriendlistpage"
                        }, 
                    ]
                },
                {
                    "id": "friendactivitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-running",
                            "width": 2,
                            "color": "green",
                            "url": "/friend",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        { 
                            "type": "list", 
                            "icon": "fa-running", 
                            "color": "red", 
                            "search": true, 
                            "url": "/friend/:friendKey/activity", 
                            "form": { 
                            "form": "ActivityForm" 
                            } 
                        }, 
                    ]
                },
                {
                    "id": "activityfriendlistpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-running",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        { 
                            "type": "list", 
                            "icon": "fa-user", 
                            "color": "blue", 
                            "search": true, 
                            "url": "/activity/:activityKey/friend", 
                        }, 
                    ]
                },
                {
                    "id": "locationactivitylistpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fa-home",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        { 
                            "type": "list", 
                            "icon": "fa-running", 
                            "color": "red", 
                            "search": true, 
                            "url": "/location/:locationKey/activity", 
                        }, 
                    ]
                },
            ]
        }
    };
    get guiModel() {
        return this._guiModel;
    }
}
