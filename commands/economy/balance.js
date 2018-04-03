const { Command } = require("../../Nitro");
const Bank = require("../../Extensions/Bank");

class BalanceCommand extends Command {
    async run({ message, bot, reply, t }) {
        const commands = bot.commands;
        const groups = bot.CommandLoader.groups;
        const requesterID = message.author.id;
        const bank = new Bank(message.author);
        var balance = await bank.balance();
        const embed = bot.embed
            .setTitle(":atm: "+message.member.nickname+" :atm:")
            .nitroColor()

        embed.addField("Balance: "+balance.toFixed(2)+" "+CUR.code, "Account #: "+requesterID);
        return await reply(embed);
    }

    help = "Shows your current balance";
    usage = "{}balance or {}balance <command>";
    dm = false;
    alias = ["money"];
}

module.exports = BalanceCommand;
