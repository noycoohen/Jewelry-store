//use biz_cards
db.createUser({
  user: "root",
  pwd: "123456",
  roles: [
    { role: "readWrite", db: "jewerly_store" },
    { role: "dbAdmin", db: "jewerly_store" },
  ],
});

//biz_cards_dev
