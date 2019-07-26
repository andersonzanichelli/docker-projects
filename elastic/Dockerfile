FROM openjdk:11

RUN useradd -ms /bin/bash -d /home/elastic elastic

WORKDIR "/home/elastic"

RUN wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.2.0-linux-x86_64.tar.gz
RUN tar -xzf elasticsearch-7.2.0-linux-x86_64.tar.gz
RUN rm -rf elasticsearch-7.2.0-linux-x86_64.tar.gz

RUN chown elastic:elastic -R elasticsearch-7.2.0

USER elastic

CMD ["bash","elasticsearch-7.2.0/bin/elasticsearch"]

EXPOSE 9200 9300
