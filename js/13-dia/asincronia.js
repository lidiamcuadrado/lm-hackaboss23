// JS de 1 solo hilo

console.log("Este es un primer mensaje");

setTimeout(() => console.log("Este contenido es asíncrono"), 3000);

console.log("Este es un segundo mensaje");

// SetTimeout
// set Timeout(callback, milisegundos)

//SetInterval
//setInterval(callback, milisegundos)
//setInterval(() => console.log('Esto es un intervalo'), 4000)

function alarm(secondsToRing) {
  let seconds = 0;
  const clock = setInterval(() => {
    if (secondsToRing === seconds) {
      console.log("Riiiiiiiiiiiing");
      clearInterval(clock);
    } else {
      console.log(`Seconds: ${seconds}`);
      seconds++;
    }
  }, 1000);
}

alarm(10);

//function getUser(email, callback){
//  callback()
//}

//Callback Hell
getUser("hola@example.com", function () {
  getUserId(user, function () {
    getUserFriends(userId, function () {
      getFriendsIds(friends, function () {
        getFriendsEvents(friendsIds, function () {});
      });
    });
  });
});
