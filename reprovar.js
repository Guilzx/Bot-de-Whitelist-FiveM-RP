const Discord = require('discord.js');
const botconfig = require('../config.json')

module.exports.run = async (client, message, args) => {
    message.delete()
     let guild = client.guilds.cache.get('722041041829756999')

    let member = message.mentions.members.first()
    if (!member) return message.channel.send("> Você deve mencionar um membro!")

    if (message.channel.type == "dm") return;
    if (!message.member.hasPermission('MUTE_MEMBERS')) {
      return message.channel.send("> Você não possui permissão para utilizar este comando. ``[MUTE_MEMBERS]``")
    }
    
        let removerole = message.guild.roles.cache.get('733419908318232649')
        let role = message.guild.roles.cache.get('771162457837404201')

        let mensg = args.slice(1).join(' ');
        if (!mensg) return message.channel.send("> Você deve escrevar um motivo!")

        if(role) {
            member.roles.add(role);
            member.roles.remove(removerole)
          
            const guildMember = message.mentions.members.first();

            let embed = new Discord.MessageEmbed()
            .setColor("#ff0f00")
            .setTitle("Formulário Aprovado!<a:errado:774071805073293362>")
            .setDescription(`> **__Cidadão Reprovado:__**\n${member}\n\n > **__Reprovado por:__**\n${message.author}\n\n> **__Nome do personagem | ID:__**\n${guildMember.nickname}\n\n> **__Motivo:__**\n ${mensg}`)
            .setFooter(guild.name)
            .setTimestamp()
            client.channels.cache.get('745376972947062949').send(embed)
        }
}