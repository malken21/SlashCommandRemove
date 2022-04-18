const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 'GUILD_VOICE_STATES'] });

const Config = require("./Config.json");

client.login(Config.TOKEN);

client.on('ready', () => {
  console.log(`login!!(${client.user.tag})`);//ログインログ
});

client.on("interactionCreate", interaction => {
  if (!interaction.isCommand()) {
    return;
  }
  const embed = new MessageEmbed()
    .setColor('ffa500')
    .setTitle(`コマンド削除完了`)
    .setDescription(`コマンド名:${interaction.commandName}\nコマンドID:${interaction.commandId}`)//埋め込みを生成
  interaction.reply({ embeds: [embed] });//Discordに埋め込みで削除したコマンドを表示
  console.log(`コマンド名:${interaction.commandName}\nコマンドID:${interaction.commandId}\nコマンドを削除しました`);//ログに削除したコマンドを表示
  client.guilds.cache.get(interaction.guildId).commands.delete(interaction.commandId);//コマンド削除
});