exports.parse = function(json) {
  var profile = {};
  var data = json;
  profile.id = data.email;
  profile.displayName = data.nickname;
  profile.photoUrl = data.avatar;
  if (data.avatar) {
    profile.photos = [data.data];
  }
  if (data.email) {
    profile.emails = [{value: data.email}];
  }

  return profile;
};
