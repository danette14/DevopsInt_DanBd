FROM jenkins/jenkins:latest
RUN mkdir /var/jenkins_home
RUN chown -R 1000:1000 /var/jenkins_home
RUN chmod -R 755 /var/jenkins_home
COPY plugins.txt /var/plugins.txt
RUN jenkins-plugin-cli --plugin-file /var/plugins.txt
COPY casc.yaml /var/jenkins_home/casc.yaml
ENV CASC_JENKINS_CONFIG=/var/jenkins_home/casc.yaml
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"

