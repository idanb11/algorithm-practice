/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
  const counter = {};
  const balloon = "balloon";

  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    counter[element] = counter[element] ? counter[element] + 1 : 1;
  }

  let results = counter[balloon[0]] || 0;

  for (let index = 1; index < balloon.length; index++) {
    if (counter[balloon[index]]) {
      if (["l", "o"].includes(balloon[index])) {
        const currentMax = Math.floor(counter[balloon[index]] / 2);
        results = Math.min(results, currentMax);
      } else {
        const currentMax = counter[balloon[index]];
        results = Math.min(results, currentMax);
      }
    }
  }

  return results;
};

// maxNumberOfBalloons("loonbalxballpoon");
// maxNumberOfBalloons("nlaebolko");

maxNumberOfBalloons(
  "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
);

maxNumberOfBalloons("hpitp")