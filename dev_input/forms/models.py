from django.db import models

class githubUrlA(models.Model):
  user = models.CharField(max_length=200)
  repository = models.CharField(max_length=200)

class githubUrlB(models.Model):
  user = models.CharField(max_length=200)
  repository = models.CharField(max_length=200)