from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

from .models import githubUrlA

def index(request):
  user_input = githubUrlA.objects
  template = loader.get_template('forms/index.html')
  context = RequestContext(request, {
    'user_input': user_input,
  })
  #return HttpResponse("Hello, world. You're at the forms index.")
  return HttpResponse(template.render(context))

def inputUrl(user, repository):
    return HttpResponse("You are user %s." % user)