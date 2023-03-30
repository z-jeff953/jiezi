FROM node:15.12.0
# 创建app目录
RUN mkdir -p /usr/src/biz
# 设置工作目录
WORKDIR /usr/src/biz

# 复制所有文件到工作目录
COPY . /usr/src/biz

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000

CMD ["npm","start"]
