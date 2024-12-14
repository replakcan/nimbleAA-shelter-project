const Role = Object.freeze({
  CLIENT: Symbol("client"),
  SHELTER_MANAGER: Symbol("shelterManager"),
  SHOP_OWNER: Symbol("shopOwner"),
});

module.exports = Role;