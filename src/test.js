const boj = {
  image: {
    upload_unofficial: '网友上传',
    hotel_image: '酒店图片',
    appearance: '外观',
    image_promt_1:
      '以上图片均为{{channelText}}和用户上传，仅供参考，实际情况以门店为准。',
    n0_window: '无窗',
    image_title: '酒店图片',
    no_image_1: '该{{channelText}}暂无图片',
  },
};

function depData(data, flatData, parentKey = '') {
  if (!data) {
    return {};
  }
  for (let key in data) {
    let value = `${parentKey}${parentKey ? '.' : ''}${key}`;
    if (typeof data[key] === 'string') {
      flatData[data[key]] = flatData[data[key]]
        ? [...flatData[data[key]], value]
        : [value];
    } else {
      depData(data[key], flatData, value);
    }
  }
}
let res = {};
depData(boj, res);

function searchValueByKey(data, target, enUsData) {
  let res = [];
  Object.keys(data).forEach((key) => {
    if (key.includes(target)) {
      for (let item of data[key]) {
        const enUsVal = getValueByKey(enUsData, item);
        let option = {
          label: item,
          description: `zh-cn:${key} en-us:${enUsVal}`,
        };
        res.push(option);
      }
    }
  });
  return res;
}

// key 为如 'image.hotel_image' 形式
function getValueByKey(data, key) {
  let keys = key.split('.');
  let value = data;
  for (let k of keys) {
    value = value[k];
    if (!value) {
      value = '';
      return;
    }
  }
  return value;
}

console.log(searchValueByKey(res, '图片', boj));
