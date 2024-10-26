const { sumTokensExport } = require("../helper/sumTokens");
const sdk = require("@defillama/sdk");

const owner = [
  "1LaC3Xt8RZWYH1pjcvXxrWxLvXe7iR3ybe",
  "bc1qwgnhe6vn5zzu7csukavhfatzdasvmkavktqe4udzx96dk602ghsqaz8vt6",
  "bc1patpjgd37q68kmt4zd5u3ajp7t95r785t5e0wkh4e20kwnducv5rqpvzat0",
  "bc1pjyxkkt2ufregr92cu0ccuje8efez68wzf347hlf5ym02ah8nqlhslg8lwz",
  "bc1p0tsy45wav45req0ltwlca56m2wss9dd26g3wpdjujwmhtk0q79dq7d8fhp",
  "bc1p7dafndyllnsqtthxhp76gzjwujzeelzc2qt8haua7ds8cmqgvhkqtr00ya",
  "bc1pmjcg79u2quppamjtekfns5pqmdlpd0gqlwvksq9tzrua0f3vq7hsdmfcs9",
  "bc1p4su5lzpaxz7rc9z6tv8u4pfstpxaw7hagdrlrq8p2z3uvd8p8thsddye9w",
  "3FRaevESEjvvrE9q5GdmuAvjsGUy8sCfS4",
  "bc1qwmw0j0nwe2r8rl8cgecf9pqhgqkpzs0zcfcraz",
  "bc1phhfsdcts2lqkc44ver6v24460x5kx5dpg364elxd8jzfjpg5q4yqt8saty",
  "bc1paew2r3hqqnwhatttwx3qe3f837vvhwx7jhv228py9u3t7s22ltmqenjdym",
  "bc1qma2epmz00c7kutshs0h7m8rra8ceekht87amu7",
  "bc1p93qry6vdxutmtnqk0n48hs9au54xha6ywr9a8fryy2a3ctqcn0hqt5s0cv",
  "bc1qdrhewkdyy44xf80n79wmls3pyg07lrg3syhmze",
  "bc1phql7l5rrfqn9egmppjtlvyw0evav853q5uzlzcq8rdp5sp0dwjzq9x57pn",
  "bc1pc8t32hxvlnnv0lyuqhfqy9mfmaxtl66e495rqw4rmp7y4q60kkcs2wt2pq",
  "bc1pxfwnyqng7c622te5m5ayjsz6lrsxjl542wyw99h2p5e60zmeknqq49g0fm",
  "bc1p6mu8mrtnfz0frdfghfxr05tr8dq6j0q65rpzhhgg7998zelfp74qxxejh9",
  "bc1qkj4yxrlsear0hujkf3pq5zc4r8mnz3ep8udftj",
  "3KKdHVw5TFrPLqM9q8znpjxCyYpzZhErFH",
  "bc1qj9w5ee2kf4akvtzrj59p77yc6x02nqqg9m0tcd",
  "38fLZKJQuNMAEmFXTbbpkTo6fD5su2fD9P",
  "bc1p8jpunkzxpued6d4k4n8the7trn3m53vjphxwwaxls58kg3gyracqwetwzl",
  "bc1p8275ypqm7z4pyzhrvs6ashfgz5fuchtet8lqpl3xaecgyy07rrgq3jmvrx",
  "bc1pyfmtputwx7uvug972jp5r658da90m4dl4sgx506znnw3ezushuzqwz5u8a"
  ]
  
module.exports = {
  methodology: `Total amount of BTC in ${owner.join(", ")}. Restaked on babylon`,
  doublecounted:true,
  bitcoin: {
    tvl: sdk.util.sumChainTvls([sumTokensExport({ owner })]),
  },
};
