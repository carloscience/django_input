from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

def index(request):
  user_input = ""
  template = loader.get_template('forms/index.html')
  context = RequestContext(request, {
    'user_input': user_input,
  })
  return HttpResponse(template.render(context))