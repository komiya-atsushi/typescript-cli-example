import * as os from 'os';
import * as util from 'util';

const message: {
  prefix: string,
  suffix: string,
} = {
  prefix: 'Hello',
  suffix: 'world'
};

console.log(`${message.prefix}, ${message.suffix}`);
console.log(`CPU: ${util.inspect(os.cpus())}`);
