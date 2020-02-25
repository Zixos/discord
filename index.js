const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "=";

client.login (process.env.TOKEN);

client.on("message", message =>{
     if(!message.guild) return
     if(message.content === prefix + "hello"){
         message.channel.send("Bonjour " + message.author + " !")
     }
});  

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "miam"){
        message.channel.send("Miam t'es trop bon " + message.author + " !")
    }
});  

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "Theo"){
        message.channel.send("Theo le best " + " !")
    }
});  

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("680810376849260582").send (user + "Mon maitre Zixos m'oblige malheureusement à te souhaiter la bienvenue sur le serveur !")

}); 

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "Ma vie"){
        message.channel.send("Je suis une merde contrairement a mon maitre qui est parfait " + " !")
    }
});  

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "Lil Pump"){
        message.channel.send("http://2.bp.blogspot.com/-M3MZ77mRpyg/T_xfXyKsxXI/AAAAAAAAAAs/rJ2UsS1ka54/s1600/l3SQh16LGye0.jpg " + " !")
    }
}); 

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "Hitler"){
        message.channel.send("https://qph.fs.quoracdn.net/main-qimg-856b495298e31f25f7daa264c49d9e63" + " !")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "help"){
        message.channel.send("Voici toutes les commandes du serveur")
        message.channel.send("Hitler")
        message.channel.send("Lil Pump")
        message.channel.send("Ma vie")
        message.channel.send("Theo")
        message.channel.send("Ma vie")
        message.channel.send("hello")
        message.channel.send("miam")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "Hot 1"){
        message.channel.send("https://tenor.com/view/ass-jeans-gif-15058415" + " !")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "kdo"){
        message.channel.send("https://cdn.discordapp.com/attachments/679047545032278020/681901101481590868/8767676767.PNG https://cdn.discordapp.com/attachments/679981242405486606/681289801990930484/image0.jpg https://cdn.discordapp.com/attachments/680398524252160020/681945352089239631/20200225_202702.jpg https://cdn.discordapp.com/attachments/680398524252160020/681457862815383566/SPOILER_Photo_Jun_28_10_54_09_PM_1-1.png https://cdn.discordapp.com/attachments/681135026083069964/681502777939197990/image1.jpg" + " !")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "kdo2"){
        message.channel.send("https://cdn.discordapp.com/attachments/681483920633757724/681554277868503072/image0_1.jpg https://cdn.discordapp.com/attachments/681081301243265024/681095161270239242/SPOILER_Snapchat-14562112.jpg https://cdn.discordapp.com/attachments/679430035924320269/681195864139890701/image0020.jpg https://cdn.discordapp.com/attachments/677546948584013834/681607118142439440/image0.png https://cdn.discordapp.com/attachments/673078798341767180/673083250113249280/image0_1.png" + " !")
    }
});

