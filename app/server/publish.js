Meteor.publish('issues', function(userID) {
    return Issues.find({createdBy: userID});
});