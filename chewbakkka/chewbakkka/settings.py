# -*- coding: utf-8 -*-
"""
Django settings for ITCG.ua project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""
import os
import sys
import socket
import re
server_name = socket.gethostname().split('.')[0]

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_NAME = os.path.basename(BASE_DIR)

sys.path.append("/home/www/etc/python-lib/")

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

if not re.search("/sites-itcg/", BASE_DIR):
    DEBUG = True
    TEMPLATE_DEBUG = True
else:
    DEBUG = False
    TEMPLATE_DEBUG = False

"""
Переодические задачи
Ручной запуск: sudo env C_FORCE_ROOT=yes ../env/bin/python manage.py celeryd -B

CELERY_ALWAYS_EAGER = True - Задачи не накладываются друг на друга
CELERY_ALWAYS_EAGER = False - Задачи накладываются друг на друга

Для создания задач нужно создать файл в apps/APP_NAME/tasks.py

Создать функцию с любым названием и декоратором periodic_task:
from celery.task import periodic_task
import datetime
@periodic_task(ignore_result=True, run_every = datetime.timedelta(seconds = 5))
def task():
    pass

Для редактирования периода запуска читать мануал по datetime.timedelta
"""
# CELERY_ALWAYS_EAGER=True
# CELERYD_CONCURRENCY=1
# CELERY_DISABLE_RATE_LIMITS = True
# CELERYBEAT_SCHEDULER = "djcelery.schedulers.DatabaseScheduler"
# BROKER_BACKEND = "djkombu.transport.DatabaseTransport"

ADMINS = (
    ('ITCG.ua', 'errors.backend@itcg.ua'),
)

MANAGERS = ADMINS

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
#         'NAME': 'DB_NAME',                      # Or path to database file if using sqlite3.
#         'USER': 'www',                      # Not used with sqlite3.
#         'PASSWORD': '',                  # Not used with sqlite3.
#         'HOST': '127.0.0.1',                      # Set to empty string for localhost. Not used with sqlite3.
#         'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
#     }
# }

# Hosts/domain names that are valid for this site; required if DEBUG is False
# See https://docs.djangoproject.com/en/1.4/ref/settings/#allowed-hosts
ALLOWED_HOSTS = ["*",]

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'Europe/Kiev'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'ru'

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale.
USE_L10N = True

# If you set this to False, Django will not use timezone-aware datetimes.
USE_TZ = True

MEDIA_ROOT = os.path.join(BASE_DIR, PROJECT_NAME, 'media')
MEDIA_URL = '/media/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = os.path.join(BASE_DIR, '../static_content/', 'static')

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/
STATIC_URL = '/static/'

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'i$@t0kc)rug^#$a&amp;nx=71eg=c0h5+^s_=nhg1_6_ytrrobi)an'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'pipeline.finders.PipelineFinder',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'pipeline.middleware.MinifyHTMLMiddleware',
)

ROOT_URLCONF = '%s.urls' % PROJECT_NAME

# Python dotted path to the WSGI application used by Django's runserver.
WSGI_APPLICATION = '%s.wsgi.application' % PROJECT_NAME

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'apps'),
    os.path.join(BASE_DIR, PROJECT_NAME, 'templates'),
)

INSTALLED_APPS = (
    # External apps that need to go before django's

    # Django Theme module
    'flat',

    # Django modules
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # External apps
    'gunicorn',
    # 'sorl.thumbnail',
    'pipeline',

    # 'djcelery',
    # 'djkombu',

    # Local apps
)



TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.request',
)

PIPELINE_CSS = {
    'style_css': {
        'source_filenames': (
          # 'css/style.css',
          # 'css/style.less',
          # 'css/*.less',
        ),
        'output_filename': 'css/style.css',
        'variant': 'datauri',
    },  
    'bower_css': {
        'source_filenames': (
          # 'bootstrap/dist/css/bootstrap.css',
        ),
        'output_filename': 'css/bower.css',
        'variant': 'datauri',
    }
}

PIPELINE_JS = {
    'script_js': {
        'source_filenames': (
          # 'js/script.js',
        ),
        'output_filename': 'js/script.js',
    },
    'bower_js': {
        'source_filenames': (
        ),
        'output_filename': 'js/bower.js',
    },
}


PIPELINE_COMPILERS = (
  'pipeline.compilers.less.LessCompiler',
  'pipeline.compilers.coffee.CoffeeScriptCompiler',
)

PIPELINE_JS_COMPRESSOR = 'pipeline.compressors.jsmin.JSMinCompressor'
STATICFILES_STORAGE = 'pipeline.storage.PipelineStorage'


def get_static_dir(apps):
    l = []

    if os.path.isdir(os.path.join(os.path.dirname(__file__), '..', 'bower_components')):
        l.append(os.path.join(os.path.dirname(__file__), '..', 'bower_components'))

    if os.path.isdir(os.path.join(BASE_DIR, PROJECT_NAME, 'static')):
        l.append(os.path.join(BASE_DIR, PROJECT_NAME, 'static'))

    for app in apps:
        try:
            app_static_path = os.path.join(BASE_DIR, 'apps', app.split('apps.')[1], 'static')
            if os.path.isdir(app_static_path):
                l.append(app_static_path)
        except:
            pass
    return tuple(l)

# Additional locations of static files
STATICFILES_DIRS = get_static_dir(INSTALLED_APPS)


# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error when DEBUG=False.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'default': {
        'level':'INFO',
        'class':'logging.handlers.RotatingFileHandler',
        'filename': os.path.join(BASE_DIR, '../logs/django.log'),
        'maxBytes': 1024*1024*5, # 5 MB
        'backupCount': 5,
        'formatter':'simple',
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        },
        # Log to a text file that can be rotated by logrotate
        'logfile': {
            'class': 'logging.handlers.WatchedFileHandler',
            'filename': os.path.join(BASE_DIR, '../logs/django.log')
        },
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
        'django': {
            'handlers': ['logfile'],
            'level': 'ERROR',
            'propagate': False,
        },
       'samsungtabs': {
            'handlers': ['logfile'],
            'level': 'WARNING', # Or maybe INFO or DEBUG
            'propagate': False
       },
    }
}

try:
    from local_settings import *
except ImportError:
    pass
