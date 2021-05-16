// file:///Volumes/code/cognito/jwt-token-reader/index.html#id_token=eyJraWQiOiJNTWV0dk9wbFZYeEhESTVJaDhJSVdVWWI5VmFBZU5BeVVIeG9iXC9tQWpoOD0iLCJhbGciOiJSUzI1NiJ9.eyJjdXN0b21LZXkiOiJ7XCJqc29ua2V5MVwiOiBcInZhbHVlMVwifSIsImF0X2hhc2giOiJnemE2YTE2OFZ6Q0I1amxNMTJ6OUtRIiwic3ViIjoiNTJhZGYzNGMtZTZiYS00Nzc1LThjYjctOTY2NTk5ZWI1MmU3IiwiYXVkIjoiM2FyYnNybnRuYjM1OGNuYmJlOTV2ams2NWsiLCJldmVudF9pZCI6ImM1MTU3MTM0LTA2YzktNGEzYy1iNzgxLTgxMmM3Mzc1MjM2YiIsImN1c3RvbTpleHRyYSI6ImhlbGxvIHdvcmxkIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTg5NzMwMjksImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMl8xWjJUM1BvWU0iLCJjb2duaXRvOnVzZXJuYW1lIjoibWFyazEiLCJleHAiOjE2MTg5NzY2MjksImlhdCI6MTYxODk3MzAyOX0.NjEn4ptXMF11W-jo-nU4UstEnrL0IdbE6N-BHArnkYjGMf8-FMqB0AgQwYWLMj6g87gL4foWz4VijuWGEdr6ExgXvwLUyZvV14kzE2INElxpSKV6NE8PhCuQj-Kk8b-pmyrGMT3yxxJQAfs9SeRjuFhPFItUTm1uNia-GMGkIAXfyN9JqSj2mUJGe7RJ50FXbh2k5ctpRPXDbtxC2bfJ2iQLkl5t4vB15UlNoGc5yC_R-ImgwSm2RntkIqaaDNPfiudHPTwjjVGX8-LxJ85ydTBqtO-adR_SnfeKuwcVxtGd_yJt4FBd1PYghM3buyUHuCUCrzTEq912aEUr_S6kHg&access_token=eyJraWQiOiJINkFsZHBTQXJQODNzdVFjSlJzazBDSHdLb0hxNm9UVjVQTFduTmdHTXJjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1MmFkZjM0Yy1lNmJhLTQ3NzUtOGNiNy05NjY1OTllYjUyZTciLCJldmVudF9pZCI6ImM1MTU3MTM0LTA2YzktNGEzYy1iNzgxLTgxMmM3Mzc1MjM2YiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2MTg5NzMwMjksImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMl8xWjJUM1BvWU0iLCJleHAiOjE2MTg5NzY2MjksImlhdCI6MTYxODk3MzAyOSwidmVyc2lvbiI6MiwianRpIjoiMWZjNTg1ZGUtOWM4NS00N2M0LWFlYzgtOGU3ZDcxOGI2MzI4IiwiY2xpZW50X2lkIjoiM2FyYnNybnRuYjM1OGNuYmJlOTV2ams2NWsiLCJ1c2VybmFtZSI6Im1hcmsxIn0.AWtOkuNX9n6SA6ONd8dacknVH98w0rGMbPsFYAcvg1G5cJCJ7A-z2cNk91tWLw4vBVCbJlIzxxmUzyeXMtizxeZRVBmyCvAuK_ZSBDsH2ZbE3uwCv2aMDgGpkA0a04IIvLdnNv1QhIpkZsI658P_n1hYUkG80isSm-gYGDV5WVV3doRsELomM-ay92m1LZtOUmz9JGl7PbGaUBB2F1Z9i4c98nyQQ00fAl4QSBn9DcDQ87tAliB3goecGCvmlgZByEZ6HxjkTZ86LOTpG9MjeiaHnAkkp3zXZX_BrTpj7THgWyumfv2H4xJaD0KnmKeMV_rDlhNFrdB9FsM_CB2Wpg&expires_in=3600&token_type=Bearer

window.onload = function () {
  var app = new Vue({
    el: '#app',
    data: {
      message: '1',
      idTokenEncoded: '',
      idTokenDecoded: '',
      accessTokenEncoded: '',
      accessTokenDecoded: '',
      params: {},
      paramsArray: []
    },
    mounted: function () {
      console.log("hello world");
      this.getToken();
    },
    methods: {
      getToken: function () {
        var url = location.href;
        var params = {};
        var p = [];
        if (url.indexOf('#') != -1) {
          var paramString = url.split('#')[1].split('&');
          paramString.forEach(function (param) {
            var key = param.split('=')[0];
            var value = param.split('=')[1];
            params[key] = value;
            var object = {};
            object["key"] = key;
            object["value"] = value;
            if (key == "id_token" || key == "access_token") {
              // object["decode"] = decodeJwt(value).replace(/\\/g, '');
              object["decoded"] = JSON.stringify(parseJwt(value), null, '  ');
            }
            p.push(object);
          })
        }
        this.params = params;
        this.paramsArray = p;
        this.formatText();
      },
      formatText: function () {
        var str = ""
        var a = this.paramsArray


        for (i = 0; i < a.length; i++) {

          switch (a[i].key) {
            case "id_token":
              this.idTokenEncoded = a[i].value;
              this.idTokenDecoded = a[i].decoded;
              break;
            case "access_token":
              this.accessTokenEncoded = a[i].value;
              this.accessTokenDecoded = a[i].decoded;
              break;
            case "expires_in":
              break;
            case "token_type":
              break;
            default:
              break;
          }
        }
      }
    }
  })
}

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const decodeJwt = (token) => {
  try {
    return atob(token.split('.')[1]);
  } catch (e) {
    return null;
  }
};


const prettify = obj => {

  tabs = n => Array(n).fill(' ').join('');

  let traverse = (obj, tab = 1) => {
    let markup = '{\n';

    Object.entries(obj).forEach(kv => {
      const [key, val] = kv;
      if (typeof val === 'string') {
        const { length } = Object.keys(val);
        markup += `${tabs(tab)} "${key}": "${val}"`;
      } else if (typeof val === 'object') {
        const { length } = Object.keys(val);
        if (length > 0) {
          markup += `,\n${tabs(tab)} "${key}": ${traverse(val, tab + 2)},\n`;
        } else {
          markup += `,\n${tabs(tab)} "${key}": {}`;
        }

      }
    })

    markup += `\n${tabs(tab - 1)}}`;
    return markup;
  }

  let results = traverse(obj);

  console.log(results);
}